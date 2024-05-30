# GitHub Action FTP File Transfer

This action performs a single file transfer using FTP.

## Usage
```yml
- name: Upload file
  uses: tomasbkk/action-ftp-upload@v1.0
  with:
    user: ${{ secrets.FTP_USER }}
    password: ${{ secrets.FTP_PASSWORD }}
    host: ${{ secrets.FTP_HOST }}
    src: dist/file.zip
    dest: archive/app/file.zip
```

## Inputs

### `user`

**Required** The FTP user name. (recommended to store in Secrets)

### `password`

**Required** The FTP password. (recommended to store in Secrets)

### `host`

**Required** The hostname or IP address of the FTP server.

### `port`

**Optional** The FTP port of the server. (Default: `21`)

### `src`

**Required** The path to the file to upload.

### `dest`

**Required** Destination file path on FTP remote server. (can change file name)

### `secure`

**Optional** (boolean | "implicit") Explicit FTPS over TLS, default: false. Use "implicit" if you need support for legacy implicit FTPS.


### `rejectUnauthorized`

**Optional** Whether to allow unauthorized servers when using `secure` mode. default:true. Set to false when using self-signed certificates

### `verbose`

**Optional** Default is false. If true verbose logging is used to debug the ftp connection and upload.

## Copyright and License
© 2023 TomasBkk under the [MIT license](LICENSE.md).
