import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators';
import store from '../index';
import { Component } from 'vue';
import { OnsPageOptions } from '@/core/models/ons/page.options';
import { NavigatorOptions } from '@/core/models/ons';
@Module({
    dynamic: true,
    name: 'NavigatorModule',
    store
})
class Navigator extends VuexModule {
    stack: any[] = [];
    options?: NavigatorOptions | {};
    @Mutation
    push(onsPage: OnsPageOptions | Component | { extends: unknown, onsNavigatorProps: unknown, onsNavigatorOptions: unknown }) {
        this.stack.push(onsPage);
    }

    @Mutation
    pop() {
        if (this.stack.length > 1) {
            this.stack.pop();
        }
    }

    @Mutation
    replace(onsPage: OnsPageOptions | Component | { extends: unknown, onsNavigatorProps: unknown, onsNavigatorOptions: unknown }) {
        this.stack.pop();
        this.stack.push(onsPage);
    }

    @Mutation
    reset(onsPage: OnsPageOptions | Component | { extends: unknown, onsNavigatorProps: unknown, onsNavigatorOptions: unknown }) {
        this.stack = [onsPage || this.stack[0]];
    }

    @Mutation
    option(newOptions: NavigatorOptions | { animation: unknown, animationOptions: unknown, callback: unknown }) {
        this.options = newOptions;
    }

}
export const NavigatorModule = getModule(Navigator);