import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate, User } from "."

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User | null;

  @ManyToOne(() => RealEstate, (re) => re.schedules)
  realEstate: RealEstate;
}

export { Schedule };
