import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { TreeNode } from '../../shared/TreeNode';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  public readonly URL = "http://localhost:8080/employees"

  constructor(protected httpClient: HttpClient) {}

  public create(node: TreeNode): Observable<TreeNode> {
    return this.httpClient.post<TreeNode>(this.URL, node);
  }
  //TODO
  // public delete(node: TreeNode): Observable<TreeNode> {
  //   return this.httpClient.delete<TreeNode>(`${this.URL}/${node.id}`);
  // }
  //TODO
  public get(id: string): Observable<TreeNode> {
    return this.httpClient.get<TreeNode>(`${this.URL}/${id}`);
  }
  //TODO
  public list(): Observable<Array<TreeNode>> {
    return this.httpClient.get<Array<TreeNode>>(this.URL);
  }
 //TODO
  // public update(node: TreeNode): Observable<TreeNode> {
  //   return this.httpClient.put<TreeNode>(`${this.URL}/${node.id}`, node);
  // }
   
}
