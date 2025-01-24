/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ISimulationResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';
import { CreateSimulationRequestBody, UpdateSimulationRequestBody } from '../../../resources/index.js';

export const CreateSimulationMock: CreateSimulationRequestBody = {
  notificationSettingId: 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6',
  type: 'address.created',
  name: 'New address created',
};

export const updateSimulationMock: UpdateSimulationRequestBody = {
  name: 'New UK address created',
};

export const SimulationMock: ISimulationResponse = {
  id: 'ntfsim_01ghbkd0frb9k95cnhwd1bxpvk',
  status: 'active',
  notification_setting_id: 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6',
  name: 'New address created',
  type: 'address.created',
  payload: null,
  last_run_at: '2024-10-12T07:20:50.52Z',
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
};

export const SimulationMockResponse: Response<ISimulationResponse> = {
  data: SimulationMock,
  meta: {
    request_id: '',
  },
};

export const ListSimulationMockResponse: ResponsePaginated<ISimulationResponse> = {
  data: [SimulationMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/simulations?after=1',
      per_page: 10,
    },
  },
};
