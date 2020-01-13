import React, { FunctionComponent, useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Form, Icon, Input, InputNumber, message, Select, Upload } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { UploadFile } from 'antd/lib/upload/interface';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface IProps extends FormComponentProps {
}

const Component: FunctionComponent<IProps> = props => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [selectOptions, setSelectOptions] = useState<any[]>([
    {
      name: 'option1',
      value: '1'
    },
    {
      name: 'option2',
      value: '2'
    }
  ]);

  useEffect(() => {

  }, []);

  const {form, form: { getFieldDecorator } } = props;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const handleBeforeUpload = (file: any) => {
    // 判断后缀是否符合
    const arr = file.name.split('.');
    const suffix = arr[arr.length - 1].toLowerCase();
    const isTrueType = ['png', 'jpg', 'jpeg'].includes(suffix);
    if (!isTrueType) {
      file.status = 'error';
      message.error('文件格式不符合要求，请重新上传');
      return false;
    }

    // 判断文件大小是否超出
    const exceed = file.size / 1024 <= 300;
    if (exceed) {
      file.status = 'error';
      message.error('文件大小不符合要求，请重新上传');
      return false;
    }

    return true;
  };

  const getUploadValueFromEvent = (e: any) => {
    if (Array.isArray(e)) {// 这个目前好像没啥用
      return e;
    }

    let fileList: any[] = e.fileList;

    // TODO 这里判断文件总数是否超过总大小
    // if (uploadService.exceedMaxSize(fileList,6)) {
    //   fileList.pop();
    //   return fileList;
    // }

    if (fileList.length > 5) {
      fileList = fileList.slice(-1);
    }
    return fileList;
  };

  const handleUploadPreview = (file: UploadFile) => {
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {

      }
    });
  };

  return (
    <PageHeaderWrapper>
      <Card>
        <Form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
          <FormItem {...formItemLayout} label='输入框'>
            {getFieldDecorator('input', {
              rules: [
                {
                  required: true,
                  message: '必填',
                },
              ],
            })(<Input placeholder='请输入' />)}
          </FormItem>
          <FormItem {...formItemLayout} label='输入框'>
            {getFieldDecorator('select', {
              rules: [
                {
                  required: true,
                  message: '必填',
                },
              ],
            })(
              <Select
                placeholder='请选择'
              >
                {selectOptions.map(option => {
                  return (
                    <Select.Option value={option.value} key={option.value}>
                      {option.name}
                    </Select.Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label='日期选择框'>
            {getFieldDecorator('date', {
              rules: [
                {
                  required: true,
                  message: '必填',
                },
              ],
            })(
              <RangePicker
                style={{ width: '100%' }}
                placeholder={[
                  '开始日期',
                  '结束日期',
                ]}
              />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label='多文本输入框'>
            {getFieldDecorator('textArea', {
              rules: [
                {
                  required: true,
                  message: '必填',
                },
              ],
            })(
              <TextArea
                style={{ minHeight: 32 }}
                placeholder='请输入'
                rows={4}
              />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                  数字输入框
                  <em style={{color: 'rgba(0,0,0,.45)', fontStyle: 'normal'}}>
                    （选填）
                  </em>
                </span>
            }
          >
            {getFieldDecorator('inputNumber')(
              <InputNumber
                placeholder='请输入'
                min={0}
                max={100}
              />,
            )}
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem {...formItemLayout} label='文件上传'>
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: getUploadValueFromEvent,
              rules: [
                {
                  required: true,
                  message: '必填',
                },
              ],
            })(
              <Upload
                name="file"
                accept="*"
                action={''}
                listType="picture-card"
                beforeUpload={file => handleBeforeUpload(file)}
                onPreview={handleUploadPreview}
                headers={{ Authorization: '' }}
              >
                {!form.getFieldValue('upload') || form.getFieldValue('upload').length < 5 ? (
                  <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传</div>
                  </div>
                ): null}
              </Upload>
            )}
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              提交
            </Button>
            <Button style={{ marginLeft: 8 }}>
              保存
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  )
};

export default Form.create<IProps>({})(Component);
