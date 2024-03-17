import { message } from "antd";
export default function useMessage() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (content) => {
    messageApi.open({
      type: "success",
      duration: 2,
      content,
    });
  };
  const error = (content) => {
    messageApi.open({
      type: "error",
      duration: 2,
      content,
    });
  };
  const warning = (content) => {
    messageApi.open({
      type: "warning",
      duration: 2,
      content,
    });
  };
  const loading = (content) => {
    messageApi.open({
      type: "loading",
      content,
      duration: 0,
    });
  };
  return { messageApi, success, error, warning, loading, contextHolder };
}
