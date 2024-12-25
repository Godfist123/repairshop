import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Entity()
export class Tickets {
  @PrimaryGeneratedColumn()
  tickets_id: number;

  @ManyToOne(() => Customers, (customer) => customer.tickets, {
    onDelete: "CASCADE",
    lazy: true, //using lazy loading to avoid circular dependencies
  })
  customer: Promise<Customers>; // Lazy load the customer

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false, default: false })
  completed: boolean;

  @Column({ nullable: false, default: "unassigned" })
  tech: string;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @CreateDateColumn({ type: "timestamptz" })
  updatedAt: Date;
}
export type TicketType = InstanceType<typeof Tickets>;
