import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      name: 'HomePage',
      component: () => import('@/views/Welcome/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/QuickMenu',
    component: Layout,
    redirect: '/QuickMenu/MonitorAlert',
    name: 'QuickMenu',
    meta: { title: '快捷菜单', icon: 'el-icon-s-help', roles: ['admin', 'user'] },
    children: [
      {
        path: '/MonitorAlert',
        name: 'MonitorAlert',
        component: () => import('@/views/QuickMenu/MonitorAlert'),
        meta: { title: '预警监控', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/WorkReminder',
        name: 'WorkReminder',
        component: () => import('@/views/QuickMenu/WorkReminder'),
        meta: { title: '工作提醒', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/dialog',
        name: 'dialog',
        component: () => import('@/views/QuickMenu/dialog'),
        meta: { title: '医患交流', icon: 'tree', roles: ['admin', 'user'] }
      }
    ]
  },

  {
    path: '/HealthInterfere',
    component: Layout,
    redirect: '/HealthInterfere/HandleAlert',
    name: 'HealthInterfere',
    meta: { title: '健康干预', icon: 'el-icon-s-help', roles: ['admin', 'user'] },
    children: [
      {
        path: '/HandleAlert',
        name: 'HandleAlert',
        component: () => import('@/views/HealthInterfere/HandleAlert'),
        meta: { title: '预警处置', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/HealthReport',
        name: 'HealthReport',
        component: () => import('@/views/HealthInterfere/HealthReport'),
        meta: { title: '健康报告', icon: 'table', roles: ['admin', 'user'] }
      }
    ]
  },

  {
    path: '/SignAndRecord',
    component: Layout,
    redirect: '/SignAndRecord/BasicRecord',
    name: 'SignAndRecord',
    meta: { title: '签约建档', icon: 'el-icon-s-help', roles: ['admin', 'user'] },
    children: [
      {
        path: '/BasicRecord',
        name: 'BasicRecord',
        component: () => import('@/views/SignAndRecord/BasicRecord'),
        meta: { title: '基本档案', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/ManageSign',
        name: 'ManageSign',
        component: () => import('@/views/SignAndRecord/ManageSign'),
        meta: { title: '签约管理', icon: 'table', roles: ['admin', 'user'] }
      }
    ]
  },

  {
    path: '/HeartInternal',
    component: Layout,
    redirect: '/HeartInternal/test',
    name: 'HeartInternal',
    meta: { title: '内分泌科', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/PhysicalExam',
    component: Layout,
    redirect: '/PhysicalExam/test',
    name: 'PhysicalExam',
    meta: { title: '体检科', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      {
        path: '/test3',
        name: 'test3',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      },
      {
        path: '/test4',
        name: 'test4',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/HealthData',
    component: Layout,
    redirect: '/HealthData/BodyData',
    name: 'HealthData',
    meta: { title: '健康数据', icon: 'el-icon-s-help', roles: ['admin', 'user'] },
    children: [
      {
        path: '/BodyData',
        name: 'BodyData',
        component: () => import('@/views/HealthData/BodyData'),
        meta: { title: '体征数据', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/BiochemicalData',
        name: 'BiochemicalData',
        component: () => import('@/views/HealthData/BiochemicalData'),
        meta: { title: '生化数据', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/ElectrophysiologicalData',
        name: 'ElectrophysiologicalData',
        component: () => import('@/views/HealthData/ElectrophysiologicalData'),
        meta: { title: '电生理数据', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/ImageData',
        name: 'ImageData',
        component: () => import('@/views/HealthData/ImageData'),
        meta: { title: '影像数据', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/OtherExam',
        name: 'OtherExam',
        component: () => import('@/views/HealthData/OtherExam'),
        meta: { title: '其他检查', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/SelectAll',
        name: 'SelectAll',
        component: () => import('@/views/HealthData/SelectAll'),
        meta: { title: '全部查询', icon: 'table', roles: ['admin', 'user'] }
      }
    ]
  },

  {
    path: '/ReportManage',
    component: Layout,
    redirect: '/ReportManage/test',
    name: 'ReportManage',
    meta: { title: '报表管理', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      {
        path: '/test5',
        name: 'test5',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      },
      {
        path: '/test6',
        name: 'test6',
        component: () => import('@/views/Test/test'),
        meta: { title: 'nodata', icon: 'table', roles: ['admin'] }
      }
    ]
  },

  {
    path: '/SystemConfig',
    component: Layout,
    redirect: '/SystemConfig/DoctorTeam',
    name: 'SystemConfig',
    meta: { title: '系统配置', icon: 'el-icon-s-help', roles: ['admin', 'user'] },
    children: [
      {
        path: '/DoctorTeam',
        name: 'DoctorTeam',
        component: () => import('@/views/SystemConfig/DoctorTeam'),
        meta: { title: '医生团队', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/SignServePackage',
        name: 'SignServePackage',
        component: () => import('@/views/SystemConfig/SignServePackage'),
        meta: { title: '签约服务包', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/SelectAppAcccount',
        name: 'SelectAppAcccount',
        component: () => import('@/views/SystemConfig/SelectAppAcccount'),
        meta: { title: '筛查APP账号', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/DeviceStockManage',
        name: 'DeviceStockManage',
        component: () => import('@/views/SystemConfig/DeviceStockManage'),
        meta: { title: '设备库存管理', icon: 'table', roles: ['admin', 'user'] }
      },
      {
        path: '/AdviceTemplate',
        name: 'AdviceTemplate',
        component: () => import('@/views/SystemConfig/AdviceTemplate'),
        meta: { title: '医嘱模板', icon: 'table', roles: ['admin', 'user'] }
      }
    ]
  },

  {
    path: '/RecordDetails',
    name: 'RecordDetails',
    component: () => import('@/views/ExtraPage/RecordDetails'),
    meta: { title: '档案详情', roles: ['admin', 'user'] },
    hidden: true
  },

  {
    path: '/ManageAlert',
    name: 'ManageAlert',
    component: () => import('@/views/ExtraPage/ManageAlert'),
    meta: { title: '预警处置', roles: ['admin', 'user'] },
    hidden: true
  },

  {
    path: '/CheckReport',
    name: 'CheckReport',
    component: () => import('@/views/ExtraPage/CheckReport'),
    hidden: true
  },

  {
    path: '/testRequest',
    name: 'testRequest',
    component: () => import('@/views/Test/test'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
