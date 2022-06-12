export type tableColumnsType = {
  prop: string
  label: string
  width?: number
  align?: 'left' | 'center' | 'right'
  type?: 'image' | 'date' | 'input' | 'radio'
  options: any
}

export type tableButtonType = {
  title: string
  command: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

export const userTableColumns = [
  { prop: 'id', label: 'ID', width: 80, align: 'center' },
  { prop: 'name', label: '用户名' },
  { prop: 'avatar', label: '头像', type: 'image', align: 'center', width: 100 },
  { prop: 'email', label: '邮箱', width: 300 },
  { prop: 'mobile', label: '手机号', width: 200 },
  {
    prop: 'sex',
    label: '性别',
    align: 'center',
    width: 80,
    type: 'radio',
    options: [
      ['男', 1],
      ['女', 2],
    ],
  },
  { prop: 'created_at', label: '注册时间', type: 'date', width: 120 },
] as tableColumnsType[]

export const ModuleTableColumns = [
  { prop: 'id', label: '编号', width: 80, align: 'center' },
  { prop: 'name', label: '标识' },
  { prop: 'title', label: '模块名称' },
  { prop: 'preview', label: '预览图', type: 'image' },
  { prop: 'version', label: '版本号' },
  { prop: 'author', label: '作者' },
] as tableColumnsType[]
