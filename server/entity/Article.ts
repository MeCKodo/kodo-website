import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('think_article')
export class ArticleEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  badges: string[];

  @Column()
  ctime: string;

  @Column({ name: 'url_alias' })
  urlAlias: string;
}
