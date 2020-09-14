import { createLogger } from 'redux-logger';
import { message } from 'antd';
interface IConfig{
  config:{
    onAction?:Function,
    onError:Function
  },
}
export const dva:IConfig = {
  config: {
    onAction: createLogger(),
    onError(e: Error):void {
      message.error(e.message, 3);
    },
  },
} ;
