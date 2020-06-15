/**
 * @class 菜谱详情
 */
class MenuData {
    /**
     * @name id 菜谱id
     */
    public id!: number | undefined;
    /**
     * @name secondaryId 父级分类id
     */
    public secondaryId!: number | undefined;
    /**
     * @name name 菜谱名称
     */
    public name: string;
    /**
     * @name imtro 菜谱介绍
     */
    public imtro: string;
    /**
     * @name albums 菜谱图片
     */
    public albums: string;
    /**
     * @name tags 标签数组
     */
    public tags!: string[] | undefined;
    /**
     * @name ingredients 主食材
     */
    public ingredients!: any[] | undefined;
    /**
     * @name burden 配料
     */
    public burden!: any[] | undefined;
    /**
     * @name steps 步骤数组
     */
    public steps!: any[] | undefined;
    /**
     * @name createdTime 创建时间
     */
    public createdTime!: string | undefined;
    /**
     * @name updateTime 更新时间
     */
    public updateTime!: string | undefined;


    constructor( name: string, imtro: string, albums: string, id?: number, secondaryId?: number, tags?: string[], ingredients?: any[], burden?: any[], steps?: any[], createdTime?: string, updateTime?: string ) {
        this.name = name;
        this.imtro = imtro;
        this.albums = albums;
        this.id = id;
        this.secondaryId = secondaryId;
        this.tags = tags;
        this.ingredients = ingredients;
        this.burden = burden;
        this.steps = steps;
        this.createdTime = createdTime;
        this.updateTime = updateTime;
    }
}

export default MenuData;
