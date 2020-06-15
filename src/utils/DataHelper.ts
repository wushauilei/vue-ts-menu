import MenuData from '@/model/MenuDetail';
/**
 * @class 数据处理
 */
class DataHelper {
    /**
     * @function clRecommendData 推荐菜谱数据处理
     * @param recommendData 推荐菜谱
     * @returns RecommendData[]
     */
    public clRecommendData(recommendData: any): MenuData[] {
        const nRecommends: MenuData[] = [];
        for (const item of recommendData) {
            const albums: string = item.albums.split(',')[1];
            const id: number = item.id;
            const name: string = item.name;
            const imtro: string = item.imtro;
            const recommend = new MenuData(name, imtro, albums, id );
            nRecommends.push(recommend);
        }
        return nRecommends;
    }

    /**
     * @function clMenuDetail
     * @param menu 菜谱详情
     * @returns MenuData
     */
    public clMenuDetail(menu: any): MenuData {
        const id: number = menu.id;
        const secondaryId: number = menu.secondaryId;
        const name: string = menu.name;
        const tags: any[] = menu.tags;
        const imtro: string = menu.imtro;
        const ingredients: any[] = menu.ingredients;
        const burden: any[] = menu.burden;
        const albums: string = menu.albums;
        const steps: any[] = menu.steps;
        const createdTime: string = menu.createdTime;
        const updateTime: string = menu.updateTime;
        const menuDetail: MenuData = new MenuData(name, imtro, albums, id, secondaryId, tags, ingredients, burden, steps, createdTime, updateTime);
        return menuDetail;
    }
}

export default DataHelper;
