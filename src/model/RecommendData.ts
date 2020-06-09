/**
 * @class 推荐菜谱实体类
 */
class RecommendData {
    /**
     * @name id 菜谱id
     */
    public id: number;
    /**
     * @name secondaryId 父级分类id
     */
    public secondaryId: number;
    /**
     * @name name 菜谱名称
     */
    public name: string;
    /**
     * @name tags 所有标签
     */
    public tags: string;
    /**
     * @name imtro 介绍
     */
    public imtro: string;
    /**
     * @name albums 图片
     */
    public albums: string;

    constructor(id: number, secondaryId: number, name: string, tags: string, imtro: string, albums: string) {
        this.id = id;
        this.secondaryId = secondaryId;
        this.name = name;
        this.tags = tags;
        this.imtro = imtro;
        this.albums = albums;
    }
}

export default RecommendData;
