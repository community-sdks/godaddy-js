export class AbstractService {
  constructor(client, baseUrl) {
    this.client = client;
    this.baseUrl = baseUrl;
  }

  call(method, path, options = {}) {
    return this.client.request({
      method,
      serviceBaseUrl: this.baseUrl,
      path,
      ...options
    });
  }
}
