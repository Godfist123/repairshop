import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Tickets } from "./Tickets";

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  customers_id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  address1: string;

  @Column({ type: "text", nullable: true })
  address2: string | null;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false, length: 2 })
  state: string;

  @Column({ nullable: false, length: 5 })
  postcode: string;

  @Column({ nullable: true })
  notes: string;

  @OneToMany(() => Tickets, (ticket) => ticket.customer, { lazy: true })
  tickets?: Promise<Tickets[]>;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt: Date;
}
export type CustomerType = InstanceType<typeof Customers>;
