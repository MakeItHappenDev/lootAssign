module.exports = (req = undefined) => {
  if(req){
      let protocol = 'https';
      let host = req.headers['x-forwarded-host'] || req.headers['host']
      if (host.indexOf('localhost') > -1) {
          protocol = 'http';
      }
      const baseUrl = `${protocol}://${host}`
      return baseUrl
  }
  else{
      return ''
  }
}