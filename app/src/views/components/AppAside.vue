<template>
    <v-navigation-drawer
        v-model="$store.state.asideOpen"
        app
        clipped
        color="grey lighten-4">
        <v-list
            dense
            class="grey lighten-4">
            <template v-for="(item, i) in items">
                <v-row
                    v-if="item.heading"
                    :key="i"
                    align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col
                        cols="6"
                        class="text-right">
                        <v-btn
                            small
                            text
                        >edit
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider
                    v-else-if="item.divider"
                    :key="i"
                    dark
                    class="my-4"
                ></v-divider>
                <v-list-item
                    v-else
                    :key="i"
                    @click=""
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text">
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'app-aside',
        data: () => ({
            drawer: null,
            items: [
                { icon: 'lightbulb_outline', text: 'Notas' },
                { divider: true },
                { icon: 'archive', text: 'Arquivo' },
                { icon: 'delete', text: 'Lixeira' },
            ],
        })
    }
</script>

<style lang="stylus">
    .v-application
        .white
            border-color #ccc !important

    .app-aside
        border-bottom 1px solid #ccc !important

</style>
