import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RealEstate } from ".";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (re) => re.category)
  realEstate: Array<RealEstate>;
}

export { Category };
