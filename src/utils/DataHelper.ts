import RecommendData from '@/model/RecommendData';
/**
 * @class 数据处理
 */
class DataHelper {
    /**
     * @Function 推荐菜谱数据处理
     * @param recommendData 推荐菜谱
     * @returns RecommendData[]
     */
    public clRecommendData(recommendData: any): RecommendData[] {
        const nRecommends: RecommendData[] = [];
        for (const item of recommendData) {
            const albums: string = item.albums.split(',')[1];
            const id: number = item.id;
            const secondaryId: number = item.secondaryId;
            const name: string = item.name;
            const tags: string = item.tags;
            const imtro: string = item.imtro;
            const recommend = new RecommendData(id, secondaryId, name, tags, imtro, albums);
            nRecommends.push(recommend);
        }
        return nRecommends;
    }
}

export default DataHelper;
