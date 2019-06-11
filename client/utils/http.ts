import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  url: string;
  data?: any;
  options?: AxiosRequestConfig;
};

class Http {
  static baseURL = 'http://www.meckodo.com';
  async _request<T>(config: RequestConfig) {
    const { method, url, data = null, options = {} } = config;
    const { headers, ...rest } = options;

    return await axios.request<T>({
      url: `${Http.baseURL}${url}`,
      data,
      method,
      headers: {
        ...headers,
      },
      ...rest,
    });
  }

  get<T>(url: string, data?: any) {
    return this._request<T>({
      url,
      data,
      method: 'GET',
    });
  }

  post<T>(
    url: string,
    data: any,
    contentType: string = 'form',
    options: AxiosRequestConfig,
  ) {
    let cType = '';
    if (contentType === 'json') {
      cType = 'application/json';
    } else {
      cType = 'application/x-www-form-urlencoded';
    }
    let headers = {};
    if (options && options.headers) {
      headers = {
        'content-type': cType,
        ...options.headers,
      };
      delete options.headers;
    }

    return this._request<T>({
      url,
      data,
      method: 'POST',
      options: {
        headers: {
          'content-type': cType,
          ...headers,
        },
        ...options,
      },
    });
  }
}

const local = new Http();

export default local;
