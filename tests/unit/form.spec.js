//import Input from '@/components/atoms/Input.vue'
import Form from '@/components/organisam/Form.vue'
import {mount} from '@vue/test-utils'

describe("Check Input exists", ()=>{
    it("Check if the input exists in the form component", async()=>{
        const wrapper = mount(Form)
        const form = wrapper.find('form')
        const InputComponent = wrapper.find('input[name="email"]')
        await InputComponent.setValue('nevinjames2001@gmail.com')
        // expect(InputComponent.exists(true)).toBe(true)
        expect(InputComponent.element.value).toBe('nevinjames2001@gmail.com')
    })
})