import config from 'config';
import { session, Telegraf } from 'telegraf';

import ACommand from './commands/command.class';
import StartCommand from './commands/start.command';
import IContext from './common/interfaces/context.interface';

const TELEGRAM_TOKEN: string = config.get('telegram.token');

class Bot {
  private bot: Telegraf<IContext>;

  private commands: ACommand[] = [];

  constructor(token: string) {
    this.bot = new Telegraf<IContext>(token);
    this.bot.use(session());
  }

  public init(): void {
    this.commands = [new StartCommand(this.bot)];
    this.commands.forEach((command) => command.handle());

    this.bot.launch();
  }
}

const bot = new Bot(TELEGRAM_TOKEN);

bot.init();
