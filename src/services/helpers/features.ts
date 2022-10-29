import { featuresFakers } from '../fakers/featuresFakers'
import { featureINterface } from '../interfaces/feature.interfaces'
import { featuresErrorInterface } from '../interfaces/errorAPI.interfaces'

export const createFeature = async (): Promise<featureINterface | featuresErrorInterface> => {
    try {
        return {
            status: true,
            datas: featuresFakers
        }
    } catch (error) {
        return {
          message: "error"
        }
    }
}
