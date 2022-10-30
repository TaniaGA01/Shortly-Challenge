<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Fonctionnalités', href: '#', current: true },
    { name: 'Tarifs', href: '#', current: false },
    { name: 'Documentation', href: '#', current: false }
]
const rightNav = [
    { name: 'Se connecter', href: '#', current: false, button: false },
    { name: 'S\'inscrire', href: '#', current: false , button:true },
]
</script>
<template>
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div class="lg:columns-2 sm:columns-1">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-left sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="block h-8 w-auto lg:hidden" src="/images/logo.svg"
                                alt="Logo Shortly" />
                            <img class="hidden h-8 w-auto lg:block" src="/images/logo.svg"
                                alt="Logo Shortly" />
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    :class="[item.current ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-700 hover:font-semibold', 'px-3 py-2 rounded-md text-base font-medium']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <!-- Mobile menu button-->
                            <DisclosureButton
                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span class="sr-only">Open main menu</span>
                                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                            </DisclosureButton>
                            
                        </div>
                        <div class="absolute z-50 text-center inset-y-0 right-0 flex items-center mt-72 sm:hidden w-full">
                            <DisclosurePanel class="sm:hidden w-full px-4">
                                <div class="space-y-1 px-12 py-6 w-full bg-purple-900  rounded-lg">
                                    <DisclosureButton 
                                        v-for="item in navigation" 
                                        :key="item.name" as="a" 
                                        :href="item.href"
                                        :class="[item.current ? 'text-teal-400 text-white text-2xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-4 rounded-md text-base font-medium text-2xl']" 
                                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                                    </DisclosureButton>
                                    <div class="py-6">
                                        <hr class="mx-4" />
                                    </div>
                                    <DisclosureButton v-for="item in rightNav" :key="item.name" as="a" :href="item.href"
                                        :class="[item.button ? 'bg-teal-400 hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 active:bg-teal-700 px-5 py-6 text-sm leading-5 rounded-full font-semibold text-white flex items-center justify-center text-2xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 text-base font-medium text-2xl', 'px-3 py-4 rounded-full text-base font-medium text-2xl']">{{ item.name }}
                                    </DisclosureButton>
                                </div>
                            </DisclosurePanel>
                        </div>
                    </div>
                    
                </div>
                <div class="relative flex h-16 items-center justify-between max-sm:sr-only">
                    <div class="flex flex-1 items-center lg:justify-end sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <a v-for="item in rightNav" :key="item.name" :href="item.href"
                                    :class="[item.button ? 'bg-teal-400 hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 active:bg-teal-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white flex items-center rounded-full' : 'text-gray-400 hover:text-gray-700 hover:font-semibold', 'px-3 py-2 rounded-full text-base font-medium']">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Disclosure>
</template>



