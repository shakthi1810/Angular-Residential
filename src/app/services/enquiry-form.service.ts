import { Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

interface data {
  id: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class EnquiryFormService implements OnInit {
  constructor() {}

  enquiryDataArr: data[] = [];

  firebaseConfig = {
    apiKey: 'AIzaSyAqeMnQ6K_hbQkoD6PgvUFf0ZJV3W1pGGQ',
    authDomain: 'residentials-18.firebaseapp.com',
    projectId: 'residentials-18',
    storageBucket: 'residentials-18.appspot.com',
    messagingSenderId: '422661414886',
    appId: '1:422661414886:web:27bd1a9abe3988811b8027',
    measurementId: 'G-B1F2W320XB',
  };

  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);

  ngOnInit(): void {}

  async postEnquiryData(data: any) {
    try {
      const docRef = await addDoc(collection(this.db, 'enquiry-details'), data);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getEnquiryData() {
    this.enquiryDataArr = [];
    const enquiryData = await getDocs(collection(this.db, 'enquiry-details'));

    enquiryData.forEach((doc) => {
      let data = doc.data();
      let obj = {
        id: `${doc.id}`,
        data: JSON.stringify(data),
      };
      this.enquiryDataArr.push(obj);
    });
    let data = this.enquiryDataArr.map((cur) => {
      return {
        id: cur.id,
        data: JSON.parse(cur.data),
      };
    });

    return data;
  }

  async deleteEntries(entry: string) {
    await deleteDoc(doc(this.db, 'enquiry-details', entry));
  }

  async getCurrentData(id: string) {
    const docRef = doc(this.db, 'enquiry-details', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return;
    }
  }
}
