import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  cep: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  city: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  street: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  number: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  complement: string;

  @Column({ nullable: true, type: 'date' })
  deliveryDate: string;
}
