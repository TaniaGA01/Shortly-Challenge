<script lang="ts">
import { reactive, defineComponent, onMounted } from 'vue';
import { createFeature } from '../services/helpers/features'

interface IFeatureData{
    featureList:object
}

export default defineComponent({

    setup() {
        const featureData = reactive<IFeatureData>({
            featureList: {}
        })

        const getFeatures = async () => {
            const response = await createFeature();
            featureData.featureList = reactive(response.datas)
        }

        onMounted(() => {
            getFeatures()
        })

        return {
            featureData,
            getFeatures
        }
     }
    
})
</script>

<template>
    <div class="pb-24 pt-36 max-sm:pt-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div class="lg:text-center">
                <p class="text-center sm-text-left mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Statistiques avancées</p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center sm-text-left ">Suivez les performances de vos liens sur le Web grâce à notre tableau de bord de statistiques avancées.</p>
            </div>
            <div class="mt-24 featureContainer">
                <div class="grid grid-cols-1 sm:grid-cols-3 grid-row gap-6 featureBlock">
                    <div v-for="feature in featureData.featureList" 
                    :key="feature"
                    :class="`max-sm:text-center h-fit bg-white py-6 px-6 lg:h-72 rounded-xl ${feature.margin}` " >
                        <div 
                        class="sm:justify-start bg-purple-900 inline-block rounded-full -mt-56  justify-center">
                            <img width="35" :src="feature.icon" class="m-4 centerIcon" />
                        </div>
                        <h2 class="text-xl font-bold mt-6 text-center sm:text-left max-sm:text-2xl">{{ feature.name }}</h2>
                        <p class="text-gray-400 mt-6 text-center sm:text-left">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mt-0{
    margin-top: 0px;
}
.mt-50{
    margin-top: 50px;
}
.mt-100{
    margin-top: 100px;
}
.featureContainer{
    position:inherit;
    z-index: 1;
}
.featureBlock::before{
    content: "";
    position: absolute;
    border: 6px solid #2dd4bf;
    border-bottom-width: medium;
    width: 84%;
    top: 50%;
    z-index: -1;
}
@media (max-width: 767px)  {
    .mt-0 {
            margin-top: 0px;
        }
    
    .mt-50, .mt-100 {
        margin-top: 50px;
    }
    .featureBlock::before {
        content: "";
        position: absolute;
        border-bottom: 6px solid #2dd4bf !important;
        width: 0%;
        top: 21%;
        z-index: -1;
        height: 76%;
        left: 48%;
    }
}
</style>