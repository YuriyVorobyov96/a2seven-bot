import { Context } from 'telegraf';

import ISession from './session.interface';

export default interface IContext extends Context {
  session: ISession;
}
