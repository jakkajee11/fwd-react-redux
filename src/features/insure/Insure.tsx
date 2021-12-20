import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  calculated,
  fetchProductAsync,
  reset,
  selectInsure,
} from './insureSlice';
import styles from './Insure.module.css';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Switch,
} from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Insurance, InsuranceProduct } from '../../types/insurance';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useGetProductQuery } from '../../services/insurance';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const { Option } = Select;
const dateFmt = 'DD-MM-YYYY'; // todo: move to config

export function Insure() {
  const insure = useAppSelector(selectInsure);
  const status = useSelector((state: RootState) => state.insure.status);
  const dispatch = useAppDispatch();

  const now = moment();
  const [dob, setDoB] = useState<moment.Moment>();
  const [form] = Form.useForm();
  const [initialValues, setinitialValues] = useState({
    genderCd: 'MALE',
    planCode: 'T11A20',
    paymentFrequency: 'YEARLY',
  });

  const submitForm = (values: Insurance) => {
    setDoB(moment(values.dob));
    dispatch(
      fetchProductAsync({
        ...values,
        dob: moment(values.dob).format('YYYY-MM-DD'),
      })
    );
  };

  const showErrorInfo = (err: ValidateErrorEntity<Insurance>) => {
    console.log(['showErrorInfo', err]);
  };

  const resetForm = () => dispatch(reset());

  const renderUserInfo = () => (
    <>
      <p>
        Name: {form.getFieldValue('firstName')} {form.getFieldValue('lastName')}
      </p>
      <p>Gender: {form.getFieldValue('genderCd')}</p>
      <p>Date of birth: {moment(form.getFieldValue('dob')).format(dateFmt)}</p>
      <p>Age: {now.diff(dob, 'years')}</p>
    </>
  );

  // todo: split each benefit to new function
  const renderBenefits = () => (
    <>
      <p>Benefit</p>
      <hr />
      <p>Death benefit</p>
      <hr />
      <p>Devedent benefit</p>
      <hr />
      <p>Survival benefit</p>
      <hr />
      <p>Other benefit</p>
      <hr />
    </>
  );

  const renderRatesList = () => (
    <>
      <p>Rates</p>
      {insure?.modalRatesList.map((v) => (
        <>
          <p>
            Payment: {v.paymentFrequencyCd} Premium: {v.modalPremium} Annual
            Premium: {v.annualizedModalPremium}
          </p>
        </>
      ))}
      <hr />
    </>
  );

  const renderProductList = () => (
    <>
      <p>Product</p>
      {insure?.quotationProductList.map((v) => (
        <>
          <p>Id: {v.productId}</p>
          <p>Plan: {v.planCode}</p>
          <p>Annual amlunt: {v.baseAnnualPremium}</p>
          <p>Payment: {v.paymentFrequencyCd}</p>
        </>
      ))}
      <hr />
    </>
  );

  return (
    <Space direction='vertical' size='large'>
      <Form
        layout='horizontal'
        form={form}
        onFinish={submitForm}
        onFinishFailed={showErrorInfo}
        onReset={resetForm}
        initialValues={initialValues}
        style={{ padding: 10, marginTop: 20 }}
      >
        <Form.Item
          label='First name'
          name='firstName'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Last name'
          name='lastName'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Gender'
          name='genderCd'
          valuePropName='value'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Radio.Group>
            <Radio value={'MALE'}>Male</Radio>
            <Radio value={'FEMALE'}>Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label='Date of birth'
          name='dob'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <DatePicker picker='date' format={dateFmt} />
        </Form.Item>
        <Form.Item
          label='Plan'
          name='planCode'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Select>
            <Option value='T11A20'>Package 1 (benefit 200k)</Option>
            <Option value='T11A50'>Package 2 (benefit 500k)</Option>
            <Option value='T11AM1'>Package 3 (benefit 1M)</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='Amount (Per Year)'
          name='premiumPerYear'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          label='Payment'
          name='paymentFrequency'
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <Select>
            <Option value='YEARLY'>Yearly</Option>
            <Option value='HALFYEARLY'>Half-Yearly</Option>
            <Option value='QUATERLY'>Quaterly</Option>
            <Option value='MONTHLY'>Monthly</Option>
          </Select>
        </Form.Item>
        <Space direction='horizontal'>
          <Button type='default' danger htmlType='reset'>
            Reset
          </Button>
          <Button type='primary' htmlType='submit'>
            Calculate
          </Button>
        </Space>
      </Form>
      {/* todo: use react-router 
            display result in new route  */}
      {insure && (
        <div data-testid='calResult'>
          <hr />
          {/* User info */}
          {renderUserInfo()}

          {/* Benefit */}
          {renderBenefits()}

          {/* Rates */}
          {renderRatesList()}

          {/* Product */}
          {renderProductList()}
        </div>
      )}
    </Space>
  );
}
