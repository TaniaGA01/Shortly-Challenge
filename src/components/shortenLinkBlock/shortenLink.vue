<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { createShortLink } from '../../services/helpers/shortLink'
import ClipboardJS from "clipboard";

interface IUrlInput {
    url: string
}

interface IData {
    shortLink: string,
    shortLink2: string,
    shortLink3: string,
    urlObject:any,
    shortlyLinksArray: object[],
    shortlyOriginals: string[],
    shortlyTexts: string[],
    originalUrl:string[]
}

interface IShortlyCopyText {
    text : number
}

export default defineComponent({

    setup() {
        const inputData = reactive<IUrlInput>({
            url: ''
        })

        const dataLink = reactive<IData>({
            shortLink: '',
            shortLink2: '',
            shortLink3: '',
            urlObject: {},
            shortlyLinksArray: [],
            shortlyOriginals: [],
            shortlyTexts:[],
            originalUrl: []
        })

        const shortlyCopyText = reactive<IShortlyCopyText>({
            text:-1
        })



        const sendUrl = async (e: string) => {
            dataLink.urlObject = await createShortLink(e) as Object;

            if (dataLink.urlObject.error_code != 400) {

                dataLink.shortlyLinksArray.push(dataLink.urlObject.datas.result)

                const errorInput = document.querySelector('#shortlyInput') as HTMLElement

                errorInput?.classList.remove("border-2", "border-rose-600", "text-slate-500", "focus:outline-none", "focus:ring", "focus:ring-rose-200", "focus:border-rose-500", "dark:text-slate-400", "dark:placeholder:text-slate-600", "dark:bg-slate-900", "dark:border-rose-500", "dark:focus:ring-rose-900", "dark:focus:border-rose-600", "placeholder:text-rose-600")
                errorInput?.classList.add("border-2", "border-green-600", "text-slate-500", "focus:outline-none", "focus:ring", "focus:ring-green-200", "focus:border-green-500", "dark:text-slate-400", "dark:placeholder:text-slate-600", "dark:bg-slate-900", "dark:border-green-500", "dark:focus:ring-green-900", "dark:focus:border-green-600", "placeholder:text-green-600")
                errorInput?.classList.remove("border-gray-300", "focus:border-indigo-500", "focus:ring-indigo-500")
                
                return inputData.url = ""

            } else {
                
                const errorInput = document.querySelector('#shortlyInput') as HTMLElement
                errorInput?.classList.remove("border-2", "border-green-600", "text-slate-500", "focus:outline-none", "focus:ring", "focus:ring-green-200", "focus:border-green-500", "dark:text-slate-400", "dark:placeholder:text-slate-600", "dark:bg-slate-900", "dark:border-green-500", "dark:focus:ring-green-900", "dark:focus:border-green-600", "placeholder:text-green-600")
                errorInput?.classList.remove("border-gray-300", "focus:border-indigo-500", "focus:ring-indigo-500")
                errorInput?.classList.add("border-2", "border-rose-600", "text-slate-500", "focus:outline-none", "focus:ring", "focus:ring-rose-200", "focus:border-rose-500", "dark:text-slate-400", "dark:placeholder:text-slate-600", "dark:bg-slate-900", "dark:border-rose-500", "dark:focus:ring-rose-900", "dark:focus:border-rose-600", "placeholder:text-rose-600")
                return inputData.url = ""
            }
        }

        const copyShortLink = (idx: number) => {
            const clipboard1 = new ClipboardJS(`.clipboard${idx}`);
            clipboard1.on("success", function (e) {
                const indexList = [idx]
                
                indexList.forEach(element => {
                    if (e.text) {
                        shortlyCopyText.text = element
                        indexList.splice(element, 1)
                    }
                    e.clearSelection()
                });
            });
        }

        const showShortlyLinks = () => {
            dataLink.urlObject.datas ? true : false
        }

        return {
            sendUrl,
            inputData,
            dataLink,
            copyShortLink,
            showShortlyLinks,
            shortlyCopyText
        }
    }
})

</script>

<template>
    <div class="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="shortlyBlock bg-purple-900 -mt-16 sm:overflow-hidden rounded-lg">
            <div class="space-y-6 px-7 py-9 sm:p-10">
                <!-- <p>https://www.npmjs.com/package/vue-axios</p>
                <p>https://tailwindcss.com/docs/text-align</p> -->
                <div class="sm:flex w-full">
                    <div class="basis-full md:basis-5/6 sm:pr-2">
                        <input type="text" v-model="inputData.url" id="shortlyInput"
                            class= "text-xl  block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg h-14"
                            placeholder="Ajoutez le lien ici" />
                        <small v-show="dataLink.urlObject.error_code === 400" class="text-rose-600">
                            Merci d'utiliser une url correcte
                        </small>
                    </div>
                    <div class="basis-full md:basis-2/12 text-right ">
                        <button
                            class="text-xl md:text-lg bg-teal-400 hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 active:bg-teal-700 px-5 py-2 leading-5 rounded-lg font-semibold text-white h-14 w-full mt-3 sm:mt-0"
                            @click="sendUrl(inputData.url)">
                            Raccourcir le lien
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showShortlyLinks">
            <div v-for="(shortlyObj, idx) in dataLink.shortlyLinksArray" :key="idx" :id="`${idx}`">
                <div class="bg-white m:overflow-hidden rounded-lg mt-3 px-8 py-5 flex flex-row flex-wrap items-center w-full	">
                    <div class="sm:w-8/12 md:basis-6/12 basis-full max-sm:text-center max-sm:border-b-4 py-4">
                        <p id="shortLink" class="text-2xl">{{ shortlyObj.original_link }}</p>
                    </div>
                    <div class="sm:w-2/12 md:basis-4/12 basis-full text-right max-sm:text-center py-4">
                        <p id="shortLink2" class="text-2xl font-semibold text-teal-400">{{ shortlyObj.short_link }}</p>
                    </div>
                    <div class="sm:w-2/12 md:basis-2/12 basis-full text-right max-sm:text-center">
                        <button type="button" 
                        :id="`${idx}`"
                        data-clipboard-target="#shortLink" 
                        :class="`clipboard${idx}`"
                        class="px-5 py-4"
                        @click="copyShortLink(idx)">
                            <span
                            class="text-md bg-teal-400 hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 active:bg-teal-700 px-5 py-3 leading-5 rounded-lg font-semibold text-white flex flex-wrap"
                            v-if="shortlyCopyText.text !== idx">Copier lien</span>
                            <span 
                            class="text-md bg-purple-900 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-purple-700 px-5 py-3 leading-5 rounded-lg font-semibold text-white flex flex-wrap"
                            v-else>Lien copié</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.shortlyBlock {
    background-image: url('/images/bg-shorten-desktop.svg');
    background-size: cover;
}
</style>

