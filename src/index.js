import Vue from "vue";

Vue.component('tree-view-list', {
    template: `
    <ul>
        <li v-for="child in children">
            <span>{{ child.name }}</span>
            <tree-view-list v-if="child.children" :children="child.children"></tree-view-list>
        </li>
    </ul>
    `,

    props: {
        children: Array
    }
})

export default new Vue({
    el: '.app',
    data: {
        treeViewData: [
            {
                name: 'Ahu 1',
                children: [{
                    name: 'Zone 1',
                    children: [{
                        name: 'Foot Zone 1',
                        children: undefined
                    }]
                }]
            }
        ]
    }
})
