module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3300',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // '^/admin': '', // 效果：/api/link/list ==> http://localhost:3200/link/list
          '^/api': '/admin/', // 效果：/api/link/list ==> http://localhost:3200/admin/link/list
        },
      },
    },
  },
};
