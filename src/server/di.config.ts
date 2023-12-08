import { BindingScopeEnum, Container } from 'inversify';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: BindingScopeEnum.Singleton,
});

export { container };
