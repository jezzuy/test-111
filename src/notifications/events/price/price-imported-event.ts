/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event.js';
import { EventName } from '../../helpers/index.js';
import { PriceNotification } from '../../entities/index.js';
import { type IEventsResponse } from '../../../types/index.js';
import { type IPriceNotificationResponse } from '../../types/index.js';

export class PriceImportedEvent extends Event {
  public override readonly eventType = EventName.PriceImported;
  public override readonly data: PriceNotification;

  constructor(response: IEventsResponse<IPriceNotificationResponse>) {
    super(response);
    this.data = new PriceNotification(response.data);
  }
}
