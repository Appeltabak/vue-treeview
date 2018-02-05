import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from "vue";

Vue.component('tree-view-list', {
    template: `
    <ul>
        <li v-for="child in children" :key="child.name" style="list-style: none;">
            <span v-on:click="toggle">{{ child.name }}</span>
            <tree-view-list v-show="showChildren" :children="child.children"></tree-view-list>
        </li>
    </ul>
    `,
    data() {
        return {
            showChildren: false
        }
    },

    props: {
        children: Array
    },

    methods: {
        toggle: function(event) {
            if(event){
                this.showChildren = !this.showChildren && this.children.length > 0
            }
        }
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
                        children: []
                    }, {
                        name: 'Foot Zone 2',
                        children: []
                    }]
                }]
            }, {
                name: 'Ahu 2',
                children: []
            }
        ]
    }
})
