<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
                : Life recorD
            </h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow="grow">
            <v-tab v-for="item in tabs" :key="item">
                {{ item.name }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in tabs" :key="item"
            v-show="item.enable === 'Y'"
            @click="moveTabs(item.id)">
                <v-card color="basil" flat="flat">
                    <!-- <v-card-text>{{ text }}</v-card-text> -->
                    <component v-bind:is="currentTabComponent(item.id)"></component>
                    {{item.id}}
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
    // import {mapState, mapActions} from 'vuex'
    import Vue from 'vue'
    import HomeTab from '@/components/views/home/HomeView.vue'
    export default Vue.extend({
        components:{
            HomeTab,
        },
        data: () => ({
            tab: null,
            tabs: [
                {id: 'HomeView', name: 'Home', enable: 'Y'},
                {id: 'MyPageView', name: 'My Page', enable: 'N'},
                {id: 'SettingsView', name: 'Settings', enable: 'N'},
            ],
            text: '곧 준비할 예정입니다.'
        }),
        computed: {
            
        },
        created() {

        },
        methods: {
            saveData(){
                this.$refs.eventCall.saveComplete();
            },
            currentTabComponent(id) {
                console.log(id)
                return id
            }

        }
    })
</script>
<style>
    /* Helper classes */
    .basil {
        background-color: #fcfaf1 !important;
    }
    .basil--text {
        color: #356859 !important;
    }
</style>