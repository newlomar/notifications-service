import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientsNotificationsRequest {
  recipientId: string;
}

interface GetRecipientsNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientsNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientsNotificationsRequest,
  ): Promise<GetRecipientsNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
