import { ExecutionDetailsStatusEnum, StepTypeEnum } from '@novu/shared';
import { MantineTheme } from '@mantine/core';

import { colors } from '../../design-system';
import { Chat, CheckCircle, Digest, ErrorIcon, InApp, Mail, Sms, Timer } from '../../design-system/icons';

export const getColorByStatus = (theme: MantineTheme, status: ExecutionDetailsStatusEnum): string => {
  if (status === ExecutionDetailsStatusEnum.FAILED) {
    return colors.error;
  }

  if (status === ExecutionDetailsStatusEnum.SUCCESS) {
    return colors.success;
  }

  return theme.colorScheme === 'dark' ? colors.B60 : colors.B40;
};

export const getLogoByStatus = (
  status: ExecutionDetailsStatusEnum
): React.FunctionComponent<React.ComponentPropsWithoutRef<'svg'>> => {
  if (status === ExecutionDetailsStatusEnum.SUCCESS) {
    return CheckCircle;
  }

  if (status === ExecutionDetailsStatusEnum.FAILED) {
    return ErrorIcon;
  }

  return Timer;
};

export const getLogoByType = (
  type: StepTypeEnum
): React.FunctionComponent<React.ComponentPropsWithoutRef<'svg'>> | null => {
  if (type == StepTypeEnum.DELAY) {
    return Timer;
  }

  if (type == StepTypeEnum.DIGEST) {
    return Digest;
  }

  if (type === StepTypeEnum.EMAIL) {
    return Mail;
  }

  if (type === StepTypeEnum.SMS) {
    return Sms;
  }

  if (type === StepTypeEnum.IN_APP) {
    return InApp;
  }

  if (type === StepTypeEnum.CHAT) {
    return Chat;
  }

  return null;
};
