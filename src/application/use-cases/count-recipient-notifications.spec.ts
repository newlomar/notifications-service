import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { CountRecipientsNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientsNotifications = new CountRecipientsNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientsNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
