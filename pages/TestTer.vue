<template>
  <div class="about">
    <h1>Register Covidtation</h1>

    <ui-form class="" item-margin-bottom="20" label-width="100">
      <template #default="{ subitemClass, actionClass }">
        <ui-grid>
          <ui-grid-cell class="" columns="6">
            <!--แท็กวันที่  -->
            <ui-datepicker
              v-model="datepicker"
              :config="config"
              placeholder="Select Date.."
              columns="6"
              required
              toggle
              clear
            ></ui-datepicker>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็ก เมลล์ -->
            <ui-form-field>
              <label class="required">Email:</label>
              <ui-textfield
                v-model="Email"
                placeholder="ABC@xxx"
                required
              ></ui-textfield>
            </ui-form-field>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็ก ชื่อ -->
            <ui-form-field columns="6">
              <label class="required">Name:</label>
              <ui-textfield
                v-model="Name"
                placeholder="name"
                required
              ></ui-textfield>
            </ui-form-field>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็ก นามสกุล -->
            <ui-form-field>
              <label class="required">Last Name:</label>
              <ui-textfield
                v-model="LastName"
                placeholder="lastname"
                required
              ></ui-textfield>
            </ui-form-field>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็กเบอร์ -->
            <ui-form-field>
              <label class="required">Tell:</label>
              <ui-textfield
                v-model="Tell"
                placeholder="09x-xxx-xxxx"
                required
              ></ui-textfield>
            </ui-form-field>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็ก เพศ -->
            <ui-form-field>
              <label>Select sex:</label>
              <ui-select
                v-model="Sex"
                required
                :options="provinces"
              ></ui-select>
            </ui-form-field>
          </ui-grid-cell>

          <ui-grid-cell class="" columns="6">
            <!-- แท็ก ติดไม่ติด -->
            <ui-form-field>
              <label>Radio:</label>
              <div :class="subitemClass">
                <ui-form-field>
                  <ui-form-field>
                    <ui-radio
                      v-model="tid"
                      input-id="aaa"
                      value="positive"
                    ></ui-radio>
                    <label for="male">Positive</label>
                  </ui-form-field>
                  <ui-form-field>
                    <ui-radio
                      v-model="tid"
                      input-id="aaa"
                      value="negative"
                    ></ui-radio>
                    <label for="female">Negative</label>
                  </ui-form-field>
                </ui-form-field>
              </div>
            </ui-form-field>
          </ui-grid-cell>
        </ui-grid>

        <!-- แท็ก เพิ่มข้อมูล -->
        <ui-form-field :class="actionClass">
          <ui-button raised @click="addData()">เพิ่มข้อมูล</ui-button>
          <ui-button outlined @click="readData()">อ่านข้อมูล</ui-button>
        </ui-form-field>

        <!-- แท็กตาราง -->
        <ui-table :data="list" :thead="thead" :tbody="tbody"></ui-table>
      </template>
    </ui-form>
  </div>
</template>
<script>
import { collection, addDoc, getDocs } from 'firebase/firestore'
import db from '../plugin/index'
export default {
  mounted() {
    this.readData()
  },
  data() {
    return {
      datepicker: '',
      Name: '',
      LastName: '',
      Email: '',
      Tell: '',
      Sex: '',
      tid: '',
      provinces: [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
      ],

      province: '',
      list: [],
      thead: ['Date', 'Name', 'Lastname', 'E-mail', 'Tell', 'Sex', 'result'],
      tbody: ['Date', 'Name', 'Lastname', 'Email', 'Tell', 'Sex', 'Tid'],
    }
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, 'csmju'), {
          Date: this.datepicker,
          Name: this.Name,
          Lastname: this.LastName,
          Email: this.Email,
          Tell: this.Tell,
          Sex: this.Sex,
          Tid: this.tid,
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
    async readData() {
      this.list=[]
      const querySnapshot = await getDocs(collection(db, 'csmju'))
      querySnapshot.forEach((doc) => {
        this.list.push(doc.data())
      })
    },
    show(data) {
      console.log(data)
    },
    onPage(page) {
      // your code
    },
  },
}
</script>
