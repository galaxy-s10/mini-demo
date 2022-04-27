/** 模拟ajax请求 */
export const mockAjax = async (flag?: boolean) => {
  return new Promise<{
    code: number;
    data?: {
      id: number;
      name: string;
      age: number;
      token: string;
    };
    msg?: string;
  }>((resolve, rejected) => {
    setTimeout(() => {
      if (flag) {
        resolve({
          code: 200,
          data: {
            id: 1,
            name: '张三',
            age: 18,
            token: Math.random().toString(),
          },
        });
      } else {
        rejected({
          code: 400,
          msg: '请求失败',
        });
      }
    }, 500);
  });
};
