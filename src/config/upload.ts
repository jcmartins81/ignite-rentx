import multer from 'multer'
import { resolve } from 'path'
import * as crypto from 'crypto'

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        // @ts-ignore
        filename(
          req: Request,
          file: Express.Multer.File,
          callback: (error: Error | null, filename: string) => void
        ) {
          const fileHash = crypto.randomBytes(16).toString('hex')
          callback(null, `${fileHash}-${file.originalname}`)
        },
      }),
    }
  },
}
