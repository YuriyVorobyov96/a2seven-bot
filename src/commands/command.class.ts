import { Telegraf } from 'telegraf';

import IContext from '../common/interfaces/context.interface';

export default abstract class ACommand {
  constructor(public bot: Telegraf<IContext>) {}

  public abstract handle(): void;
}
