import config from 'config';
import { session, Telegraf } from 'telegraf';

import IContext from './common/interfaces/context.interface';

const TELEGRAM_TOKEN: string = config.get('telegram.token');

class Bot {
  private bot: Telegraf<IContext>;

  constructor(token: string) {
    this.bot = new Telegraf<IContext>(token);
    this.bot.use(session());
  }

  public init(): void {
    this.bot.launch();
  }
}

const bot = new Bot(TELEGRAM_TOKEN);

bot.init();
