import { Markup, Telegraf } from 'telegraf';

import IContext from '../common/interfaces/context.interface';
import ACommand from './command.class';

export default class StartCommand extends ACommand {
  constructor(bot: Telegraf<IContext>) {
    super(bot);
  }

  public handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);

      ctx.reply(
        'Test',
        Markup.inlineKeyboard([
          Markup.button.callback('1', 'test_1'),
          Markup.button.callback('2', 'test_2'),
        ]),
      );
    });

    this.bot.action('test_1', (ctx) => {
      ctx.session.test = 1;
      ctx.editMessageText('YES');
    });

    this.bot.action('test_2', (ctx) => {
      ctx.session.test = 0;
      ctx.editMessageText('NO');
    });
  }
}
