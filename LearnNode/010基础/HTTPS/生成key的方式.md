````
# 生成私钥key
openssl genrsa -out privatekey.pem 1024

# 通过私钥生成CSR证书签名
openssl req -new -key privatekey.pem -out certrequest.csr

# 通过私钥和证书签名生成证书文件
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

````