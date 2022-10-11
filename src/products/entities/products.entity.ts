import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  price: string;

  @Column({ nullable: false, type: 'numeric' })
  qty_stock: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  url: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  category: string;
}
