#### 链接数据库报错 ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
`mysql8.0 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password`
+ alter user 'root'@'localhost' identified with mysql_native_password by '1qazxsw2';

+ flush privileges;