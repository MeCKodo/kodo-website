import container from './container';

function inject(deps: any) {
  return function(target: any) {
    container.registerClass(target, {
      deps,
      instance: null,
    });
  };
}

export { inject };
