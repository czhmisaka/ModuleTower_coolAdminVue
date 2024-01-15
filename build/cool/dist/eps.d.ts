declare namespace Eps {
	interface BaseSysDepartmentEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 部门名称
		 */
		name?: string;
		/**
		 * 上级部门ID
		 */
		parentId?: BigInt;
		/**
		 * 排序
		 */
		orderNum?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: BigInt;
		/**
		 * 行为
		 */
		action?: string;
		/**
		 * ip
		 */
		ip?: string;
		/**
		 * ip地址
		 */
		ipAddr?: string;
		/**
		 * 参数
		 */
		params?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 父菜单ID
		 */
		parentId?: BigInt;
		/**
		 * 菜单名称
		 */
		name?: string;
		/**
		 * 菜单地址
		 */
		router?: string;
		/**
		 * 权限标识
		 */
		perms?: string;
		/**
		 * 类型 0-目录 1-菜单 2-按钮
		 */
		type?: number;
		/**
		 * 图标
		 */
		icon?: string;
		/**
		 * 排序
		 */
		orderNum?: number;
		/**
		 * 视图地址
		 */
		viewPath?: string;
		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;
		/**
		 * 是否显示
		 */
		isShow?: boolean;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 键
		 */
		keyName?: string;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 数据
		 */
		data?: string;
		/**
		 * 数据类型 0-字符串 1-富文本 2-文件
		 */
		dataType?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: string;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 角色标签
		 */
		label?: string;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: number;
		/**
		 * 菜单权限
		 */
		menuIdList?: json;
		/**
		 * 部门权限
		 */
		departmentIdList?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 部门ID
		 */
		departmentId?: BigInt;
		/**
		 * 姓名
		 */
		name?: string;
		/**
		 * 用户名
		 */
		username?: string;
		/**
		 * 密码
		 */
		password?: string;
		/**
		 * 密码版本, 作用是改完密码，让原来的token失效
		 */
		passwordV?: number;
		/**
		 * 昵称
		 */
		nickName?: string;
		/**
		 * 头像
		 */
		headImg?: string;
		/**
		 * 手机
		 */
		phone?: string;
		/**
		 * 邮箱
		 */
		email?: string;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 状态 0:禁用 1：启用
		 */
		status?: boolean;
		/**
		 * socketId
		 */
		socketId?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CloudDBEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 说明
		 */
		readme?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 类名
		 */
		className?: string;
		/**
		 * 表名
		 */
		tableName?: string;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CloudFuncInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 说明
		 */
		readme?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CloudFuncLogEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 云函数ID
		 */
		infoId?: number;
		/**
		 * 请求
		 */
		request?: json;
		/**
		 * 结果
		 */
		result?: json;
		/**
		 * 类型 0-失败 1-成功
		 */
		type?: number;
		/**
		 * 异常信息
		 */
		error?: string;
		/**
		 * 耗时(毫秒)
		 */
		time?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 主图
		 */
		mainImage?: string;
		/**
		 * 示例图
		 */
		exampleImages?: json;
		/**
		 * 库存
		 */
		stock?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 类型ID
		 */
		typeId?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 值
		 */
		value?: string;
		/**
		 * 排序
		 */
		orderNum?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 父ID
		 */
		parentId?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 标识
		 */
		key?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ImageAlbumEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 相册id
		 */
		albumId?: string;
		/**
		 * 图片数量
		 */
		picNum?: number;
		/**
		 * 权限级别 0-公开 1-私有
		 */
		permission?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 详细说明
		 */
		description?: string;
		/**
		 * 相册分类
		 */
		category?: string;
		/**
		 * 相册管理用户
		 */
		manager?: string;
		/**
		 * 相册可观看用户列表
		 */
		viewerList?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ImageBaseData {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 图片ID
		 */
		ImageId?: string;
		/**
		 * 图片地址
		 */
		url?: string;
		/**
		 * 类型
		 */
		type?: string;
		/**
		 * 文件id
		 */
		fileId?: string;
		/**
		 * 文件名
		 */
		name?: string;
		/**
		 * 文件大小
		 */
		size?: number;
		/**
		 * 文件位置
		 */
		key?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ImagesTagsBaseData {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 父分类ID
		 */
		parentId?: number;
		/**
		 * name
		 */
		name?: string;
		/**
		 * color
		 */
		color?: string;
		/**
		 * icon
		 */
		icon?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface IotDeviceEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 图标
		 */
		icon?: string;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 设备唯一ID
		 */
		uniqueId?: string;
		/**
		 * 状态 0-离线 1-在线
		 */
		status?: boolean;
		/**
		 * 客户端ID
		 */
		clientId?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface IotInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 原始数据
		 */
		originData?: longtext;
		/**
		 * 设备名
		 */
		name?: string;
		/**
		 * 设备名EN
		 */
		nameEn?: string;
		/**
		 * 简介
		 */
		description?: string;
		/**
		 * 服务
		 */
		service?: string;
		/**
		 * 栅格
		 */
		gridCell?: string;
		/**
		 * 设备绑定主题信道
		 */
		mainTopic?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface IotMessageEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 设备ID
		 */
		deviceId?: number;
		/**
		 * 数据
		 */
		data?: string;
		/**
		 * 类型 0-推送 1-接收
		 */
		type?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 表
		 */
		entityInfo?: json;
		/**
		 * 操作人
		 */
		userId?: string;
		/**
		 * 被删除的数据
		 */
		data?: json;
		/**
		 * 请求的接口
		 */
		url?: string;
		/**
		 * 请求参数
		 */
		params?: json;
		/**
		 * 删除数据条数
		 */
		count?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ScheduleEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 日程名称
		 */
		name?: string;
		/**
		 * 展示图片
		 */
		url?: string;
		/**
		 * 详情
		 */
		dēscription?: string;
		/**
		 * 结束时间
		 */
		endTime?: Date;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 地址
		 */
		url?: string;
		/**
		 * 类型
		 */
		type?: string;
		/**
		 * 分类ID
		 */
		classifyId?: BigInt;
		/**
		 * 文件id
		 */
		fileId?: string;
		/**
		 * 文件名
		 */
		name?: string;
		/**
		 * 文件大小
		 */
		size?: number;
		/**
		 * 文档版本
		 */
		version?: number;
		/**
		 * 文件位置
		 */
		key?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 类别名称
		 */
		name?: string;
		/**
		 * 父分类ID
		 */
		parentId?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 任务ID
		 */
		jobId?: string;
		/**
		 * 任务配置
		 */
		repeatConf?: string;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * cron
		 */
		cron?: string;
		/**
		 * 最大执行次数 不传为无限次
		 */
		limit?: number;
		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 状态 0:停止 1：运行
		 */
		status?: boolean;
		/**
		 * 开始时间
		 */
		startDate?: Date;
		/**
		 * 结束时间
		 */
		endDate?: Date;
		/**
		 * 数据
		 */
		data?: string;
		/**
		 * 执行的service实例ID
		 */
		service?: string;
		/**
		 * 状态 0:系统 1：用户
		 */
		type?: number;
		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;
		/**
		 * 状态 0:cron 1：时间间隔
		 */
		taskType?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 登录唯一ID
		 */
		unionid?: string;
		/**
		 * 头像
		 */
		avatarUrl?: string;
		/**
		 * 昵称
		 */
		nickName?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;
		/**
		 * 状态 0-禁用 1-正常
		 */
		status?: number;
		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ChatMessageEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ChatSessionEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TestEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoUserFollowEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoUserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}
	interface BaseComm {
		/**
		 * 修改个人信息
		 */
		"personUpdate"(data?: any): Promise<any>;
		/**
		 * 文件上传模式
		 */
		"uploadMode"(data?: any): Promise<any>;
		/**
		 * 权限与菜单
		 */
		"permmenu"(data?: any): Promise<any>;
		/**
		 * 个人信息
		 */
		"person"(data?: any): Promise<any>;
		/**
		 * 文件上传
		 */
		"upload"(data?: any): Promise<any>;
		/**
		 * 退出
		 */
		"logout"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			personUpdate: string;
			uploadMode: string;
			permmenu: string;
			person: string;
			upload: string;
			logout: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			personUpdate: boolean;
			uploadMode: boolean;
			permmenu: boolean;
			person: boolean;
			upload: boolean;
			logout: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * 刷新token
		 */
		"refreshToken"(data?: any): Promise<any>;
		/**
		 * 验证码
		 */
		"captcha"(data?: any): Promise<any>;
		/**
		 * 登录
		 */
		"login"(data?: any): Promise<any>;
		/**
		 * 获得网页内容的参数值
		 */
		"html"(data?: any): Promise<any>;
		/**
		 * 实体信息与路径
		 */
		"eps"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			captcha: string;
			login: string;
			html: string;
			eps: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			captcha: boolean;
			login: boolean;
			html: boolean;
			eps: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 排序
		 */
		"order"(data?: any): Promise<any>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<BaseSysDepartmentEntity[]>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; order: string; list: string; add: string };
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			order: boolean;
			list: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * 日志保存时间
		 */
		"setKeep"(data?: any): Promise<any>;
		/**
		 * 获得日志保存时间
		 */
		"getKeep"(data?: any): Promise<any>;
		/**
		 * 清理
		 */
		"clear"(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { setKeep: string; getKeep: string; clear: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; getKeep: boolean; clear: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysMenu {
		/**
		 * 创建代码
		 */
		"create"(data?: any): Promise<any>;
		/**
		 * 导出
		 */
		"export"(data?: any): Promise<any>;
		/**
		 * 导入
		 */
		"import"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 解析
		 */
		"parse"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<BaseSysMenuEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<BaseSysMenuEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			create: string;
			export: string;
			import: string;
			delete: string;
			update: string;
			parse: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			create: boolean;
			export: boolean;
			import: boolean;
			delete: boolean;
			update: boolean;
			parse: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 获得网页内容的参数值
		 */
		"html"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<BaseSysParamEntity>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			html: string;
			info: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			html: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<BaseSysRoleEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<BaseSysRoleEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * 获取页面配置
		 */
		"getPageConfig"(data?: any): Promise<any>;
		/**
		 * 设置页面配置
		 */
		"setPageConfig"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 移动部门
		 */
		"move"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<BaseSysUserEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<BaseSysUserEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			getPageConfig: string;
			setPageConfig: string;
			delete: string;
			update: string;
			move: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			getPageConfig: boolean;
			setPageConfig: boolean;
			delete: boolean;
			update: boolean;
			move: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CloudDb {
		/**
		 * 初始化Entity
		 */
		"initEntity"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 数据操作
		 */
		"data"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<CloudDBEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<CloudDBEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CloudDBEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			initEntity: string;
			delete: string;
			update: string;
			data: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			initEntity: boolean;
			delete: boolean;
			update: boolean;
			data: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CloudFuncInfo {
		/**
		 * 调用云函数
		 */
		"invoke"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<CloudFuncInfoEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<CloudFuncInfoEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CloudFuncInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			invoke: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			invoke: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CloudFuncLog {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<CloudFuncLogEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<CloudFuncLogEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CloudFuncLogEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DemoGoods {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DemoUserFollow {
		/**
		 * page
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoUserFollowEntity[];
			[key: string]: any;
		}>;
		/**
		 * list
		 */
		"list"(data?: any): Promise<DemoUserFollowEntity[]>;
		/**
		 * info
		 */
		"info"(data?: any): Promise<DemoUserFollowEntity>;
		/**
		 * delete
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * update
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DemoUserInfo {
		/**
		 * t1
		 */
		"t1"(data?: any): Promise<any>;
		/**
		 * t2
		 */
		"t2"(data?: any): Promise<any>;
		/**
		 * t3
		 */
		"t3"(data?: any): Promise<any>;
		/**
		 * page
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoUserInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * list
		 */
		"list"(data?: any): Promise<DemoUserInfoEntity[]>;
		/**
		 * info
		 */
		"info"(data?: any): Promise<DemoUserInfoEntity>;
		/**
		 * delete
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * update
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			t1: string;
			t2: string;
			t3: string;
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			t1: boolean;
			t2: boolean;
			t3: boolean;
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 获得字典数据
		 */
		"data"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<DictInfoEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<DictInfoEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			data: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			data: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DictType {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<DictTypeEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<DictTypeEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ImageAlbum {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<ImageAlbumEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<ImageAlbumEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ImageAlbumEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ImageAlbum {
		/**
		 * 获取该相册下的图片列表
		 */
		"getImage"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { getImage: string };
		/**
		 * 权限状态
		 */
		_permission: { getImage: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ImageImage {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<ImageBaseData>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<ImageBaseData[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ImageBaseData[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ImageFile {
		/**
		 * 用户信息
		 */
		"users"(data?: any): Promise<any>;
		/**
		 * 上传完成后，回调通知上传结果
		 */
		"image"(data?: any): Promise<any>;
		/**
		 * 准备上传阶段
		 */
		"image"(data?: any): Promise<any>;
		/**
		 * 获取上传地址
		 */
		"image"(data?: any): Promise<any>;
		/**
		 * 文件上传
		 */
		"image"(data?: any): Promise<any>;
		/**
		 * 获取图片信息
		 */
		"getImageInfo"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { users: string; image: string; getImageInfo: string };
		/**
		 * 权限状态
		 */
		_permission: { users: boolean; image: boolean; getImageInfo: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ImageTags {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<ImagesTagsBaseData>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<ImagesTagsBaseData[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ImagesTagsBaseData[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface IotDevice {
		/**
		 * 根据名称搜索设备
		 */
		"searchByName"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<IotDeviceEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<IotDeviceEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: IotDeviceEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			searchByName: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			searchByName: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface IotIot {
		/**
		 * 注册入网,嵌入式设备自主注册用
		 */
		"registerIot"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<IotInfoEntity[]>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * getIotInfo
		 */
		"getIotInfo"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			registerIot: string;
			delete: string;
			list: string;
			add: string;
			getIotInfo: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			registerIot: boolean;
			delete: boolean;
			list: boolean;
			add: boolean;
			getIotInfo: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface IotMessage {
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: IotMessageEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { page: string };
		/**
		 * 权限状态
		 */
		_permission: { page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface IotMqtt {
		/**
		 * 推送消息
		 */
		"publish"(data?: any): Promise<any>;
		/**
		 * MQTT配置信息
		 */
		"config"(data?: any): Promise<any>;
		/**
		 * config
		 */
		"config"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { publish: string; config: string };
		/**
		 * 权限状态
		 */
		_permission: { publish: boolean; config: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * 恢复数据
		 */
		"restore"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<RecycleDataEntity>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { restore: string; info: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { restore: boolean; info: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ScheduleSchedule {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<ScheduleEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<ScheduleEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ScheduleEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * 获得WPS配置
		 */
		"getConfig"(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<SpaceInfoEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<SpaceInfoEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			getConfig: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			getConfig: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<SpaceTypeEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<SpaceTypeEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 开始
		 */
		"start"(data?: any): Promise<any>;
		/**
		 * 执行一次
		 */
		"once"(data?: any): Promise<any>;
		/**
		 * 停止
		 */
		"stop"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<TaskInfoEntity>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 日志
		 */
		"log"(data?: any): Promise<any>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			start: string;
			once: string;
			stop: string;
			info: string;
			page: string;
			log: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			start: boolean;
			once: boolean;
			stop: boolean;
			info: boolean;
			page: boolean;
			log: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 删除
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		"info"(data?: any): Promise<UserInfoEntity>;
		/**
		 * 列表查询
		 */
		"list"(data?: any): Promise<UserInfoEntity[]>;
		/**
		 * 分页查询
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ChatMessage {
		/**
		 * page
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ChatMessageEntity[];
			[key: string]: any;
		}>;
		/**
		 * list
		 */
		"list"(data?: any): Promise<ChatMessageEntity[]>;
		/**
		 * info
		 */
		"info"(data?: any): Promise<ChatMessageEntity>;
		/**
		 * delete
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * update
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ChatSession {
		/**
		 * page
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ChatSessionEntity[];
			[key: string]: any;
		}>;
		/**
		 * list
		 */
		"list"(data?: any): Promise<ChatSessionEntity[]>;
		/**
		 * info
		 */
		"info"(data?: any): Promise<ChatSessionEntity>;
		/**
		 * delete
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * update
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Test {
		/**
		 * page
		 */
		"page"(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TestEntity[];
			[key: string]: any;
		}>;
		/**
		 * update
		 */
		"update"(data?: any): Promise<any>;
		/**
		 * add
		 */
		"add"(data?: any): Promise<any>;
		/**
		 * info
		 */
		"info"(data?: any): Promise<TestEntity>;
		/**
		 * delete
		 */
		"delete"(data?: any): Promise<any>;
		/**
		 * list
		 */
		"list"(data?: any): Promise<TestEntity[]>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			update: string;
			add: string;
			info: string;
			delete: string;
			list: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
			delete: boolean;
			list: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	type json = any;

	type Service = {
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;
		base: {
			comm: BaseComm;
			open: BaseOpen;
			sys: {
				department: BaseSysDepartment;
				log: BaseSysLog;
				menu: BaseSysMenu;
				param: BaseSysParam;
				role: BaseSysRole;
				user: BaseSysUser;
			};
		};
		cloud: { db: CloudDb; func: { info: CloudFuncInfo; log: CloudFuncLog } };
		demo: { goods: DemoGoods; user: { follow: DemoUserFollow; info: DemoUserInfo } };
		dict: { info: DictInfo; type: DictType };
		image: {
			album: ImageAlbum;
			Album: ImageAlbum;
			image: ImageImage;
			File: ImageFile;
			tags: ImageTags;
		};
		iot: { device: IotDevice; iot: IotIot; message: IotMessage; mqtt: IotMqtt };
		recycle: { data: RecycleData };
		schedule: { schedule: ScheduleSchedule };
		space: { info: SpaceInfo; type: SpaceType };
		task: { info: TaskInfo };
		user: { info: UserInfo };
		chat: { message: ChatMessage; session: ChatSession };
		test: Test;
	};
}
