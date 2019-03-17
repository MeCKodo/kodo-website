type Options = {
  instance: any;
  deps: any[];
};

class Container {
  classMap = new Map<any, Options>();
  registerClass(Class: any, options: Options) {
    console.log(Class, options);
    this.classMap.set(Class, options);
  }

  unRegisterClass(Class: any) {
    this.classMap.delete(Class);
  }

  get(Class: any) {
    const classOpts = this.classMap.get(Class) as Options;

    if (!classOpts) return;

    if (classOpts.instance) {
      return classOpts.instance;
    }
    classOpts.instance = new Class(...classOpts.deps);
    return classOpts.instance;
  }
}

export default new Container();
