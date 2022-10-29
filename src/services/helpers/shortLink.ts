import apiShortLink from '../api/shortLinkApi'
import { shortLinkAPIINterface } from '../interfaces/shortLink.interfaces'
import { apiErrorInterface } from '../interfaces/errorAPI.interfaces'

export const createShortLink = async (e: string): Promise<shortLinkAPIINterface | apiErrorInterface> => {
    try {
      const response = await apiShortLink.get(`shorten?url=${e}`)
        return {
          datas: response.data
        }
    } catch (error) {
        return {
          message: error.message,
          error_code: error.response.status
        }
    }
}
